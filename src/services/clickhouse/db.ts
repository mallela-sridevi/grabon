"server-only";

import { createClient } from "@clickhouse/client";

const host = process.env.CLICK_HOUSE_HOST!;
const port = process.env.CLICK_HOUSE_PORT!;
const username = process.env.CLICK_HOUSE_USER!;
const password = process.env.CLICK_HOUSE_PASSWORD!;

const client = createClient({
  url: `http://${host}:${port}`,
  username: username,
  password: password,
});

export const getData = async (query: string) => {
  try {
    const rows = await client.query({
      query: query,
      format: "JSONEachRow",
    });
    return await rows.json();
  } catch (e: any) {
    console.error(e);
  }
  return [];
};

export const saveOrUpdate = async (tableName: string, values: any) => {
  try {
    await client.insert({
      table: tableName,
      values: values,
      format: "JSONEachRow",
    });
  } catch (e: any) {
    console.error(e);
  }
};







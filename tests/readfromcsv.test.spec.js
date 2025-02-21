const { test, expect } = require('@playwright/test')

import fs from 'fs'
import path from 'path'
import { parse } from 'csv-parse/sync'

const records = parse(
    fs.readFileSync(path.join(__dirname, "../tests/QA/testdata.csv")), {
    columns: true,
    skip_empty_lines: true
}
)

for (const record of records) {
    test(`csv_validation ${record.Test_caseID}`, async ({ page }) => {
        await page.goto(process.env.URL)
        await page.locator('#APjFqb').click();
        await page.locator('#APjFqb').fill(record.Model_Name)
        await page.locator('#APjFqb').press('Enter')
    })
}
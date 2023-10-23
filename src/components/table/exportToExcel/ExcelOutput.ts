import * as XLSX from 'xlsx'

export function ExcelOutput (
  ColumnHeader: Array<{ header: string }>,
  RowData: Array<{ id?: string | number }>,
  wsName: string) {
  const Header = new Object()

  ColumnHeader.map((data, index) => {
    return (Header[excelColumn(index + 1)] = data.header)
  })

  RowData.map((data) => {
    return delete data.id
  })

  const Table: Array<{}> = [Header]

  const gettingKey: string[] = Object.keys(RowData[0])

  RowData.map((data) => {
    const Row: any = new Object()
    for (let index = 0; index < gettingKey.length; index++) {
      Row[excelColumn(index + 1)] = data[gettingKey[index]]
    }
    return Table.push(Row)
  })

  const libro = XLSX.utils.book_new()
  const hoja = XLSX.utils.json_to_sheet([...Table], { skipHeader: true })

  XLSX.utils.book_append_sheet(libro, hoja, wsName)
  XLSX.writeFile(libro, 'HelpPoint.xlsx')
}

function excelColumn (n: number): string {
  let s: number = 1; let e: number = 26; let result: string = ''
  while ((n -= s) >= 0) {
    result = String.fromCharCode(((n % e) / s) + 65) + result
    s = e
    e *= 26
  }
  return result
}

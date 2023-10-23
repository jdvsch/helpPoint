export interface locations {
location: Settings

}




export interface toolsDataType {
  id: number
  tool_name: string | null
  boolean: string
  year: string
  money: string
  number: number
  time: string
}

export const toolsData: toolsDataType[] = [
  { id: 1, tool_name: 'Drill extralargo para pruebas', boolean: 'true', year: '3/30/2023', money: '$6.08', number: 84, time: '7:27 AM' },
  { id: 2, tool_name: 'Dragline', boolean: 'true', year: '5/14/2023', money: '$5.92', number: 81, time: '8:40 PM' },
  { id: 3, tool_name: 'Crawler', boolean: 'true', year: '8/25/2023', money: '$4.43', number: 32, time: '3:01 PM' },
  { id: 4, tool_name: 'Scraper', boolean: 'true', year: '3/29/2023', money: '$2.11', number: 26, time: '5:05 PM' },
  { id: 5, tool_name: 'Trencher', boolean: 'false', year: '9/18/2022', money: '$6.74', number: 27, time: '12:09 PM' },
  { id: 6, tool_name: 'Dragline', boolean: 'true', year: '8/20/2023', money: '$8.16', number: 62, time: '4:26 AM' },
  { id: 7, tool_name: 'Trencher', boolean: 'true', year: '8/20/2023', money: '$3.32', number: 7, time: '4:07 PM' },
  { id: 8, tool_name: 'Bulldozer', boolean: 'false', year: '9/9/2023', money: '$5.62', number: 16, time: '10:54 PM' },
  { id: 9, tool_name: 'Scraper', boolean: 'false', year: '5/9/2023', money: '$3.08', number: 50, time: '2:43 PM' },
  { id: 10, tool_name: 'Skid-Steer', boolean: 'true', year: '9/20/2022', money: '$3.95', number: 29, time: '10:13 PM' },
  { id: 11, tool_name: 'Grader', boolean: 'false', year: '1/23/2023', money: '$3.79', number: 16, time: '3:07 PM' }]

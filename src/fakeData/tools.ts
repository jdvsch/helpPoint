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
  { id: 11, tool_name: 'Grader', boolean: 'false', year: '1/23/2023', money: '$3.79', number: 16, time: '3:07 PM' },
  { id: 12, tool_name: 'Scraper Drill extralargo para pruebas', boolean: 'false', year: '12/31/2022', money: '$5.30', number: 71, time: '6:25 PM' },
  { id: 13, tool_name: 'Scraper', boolean: 'true', year: '11/12/2022', money: '$4.25', number: 69, time: '6:40 PM' },
  { id: 14, tool_name: 'Trencher', boolean: 'true', year: '4/16/2023', money: '$8.84', number: 35, time: '7:03 PM' },
  { id: 15, tool_name: 'Backhoe', boolean: 'true', year: '8/25/2023', money: '$0.05', number: 43, time: '10:25 PM' },
  { id: 16, tool_name: 'Grader', boolean: 'false', year: '4/6/2023', money: '$2.83', number: 69, time: '1:22 AM' },
  { id: 17, tool_name: 'Compactor', boolean: 'false', year: '5/31/2023', money: '$3.78', number: 36, time: '5:12 AM' },
  { id: 18, tool_name: 'Compactor', boolean: 'false', year: '9/18/2022', money: '$6.60', number: 67, time: '12:20 PM' },
  { id: 19, tool_name: 'Dump Truck', boolean: 'false', year: '1/16/2023', money: '$6.61', number: 21, time: '12:29 AM' },
  { id: 20, tool_name: 'Excavator', boolean: 'true', year: '5/4/2023', money: '$6.22', number: 45, time: '8:11 AM' },
  { id: 21, tool_name: 'Skid-Steer', boolean: 'false', year: '10/9/2022', money: '$0.77', number: 40, time: '8:44 PM' },
  { id: 22, tool_name: 'Grader', boolean: 'true', year: '11/14/2022', money: '$8.37', number: 88, time: '10:34 PM' },
  { id: 23, tool_name: 'Crawler', boolean: 'true', year: '8/16/2023', money: '$1.02', number: 89, time: '3:52 PM' },
  { id: 24, tool_name: 'Dump Truck', boolean: 'false', year: '8/1/2023', money: '$8.76', number: 50, time: '12:03 PM' },
  { id: 25, tool_name: 'Dragline', boolean: 'true', year: '12/8/2022', money: '$6.79', number: 78, time: '11:18 AM' },
  { id: 26, tool_name: 'Backhoe', boolean: 'false', year: '12/20/2022', money: '$5.98', number: 61, time: '11:37 PM' },
  { id: 27, tool_name: 'Dragline', boolean: 'false', year: '6/12/2023', money: '$8.18', number: 44, time: '1:09 PM' },
  { id: 28, tool_name: 'Bulldozer', boolean: 'false', year: '12/31/2022', money: '$8.13', number: 96, time: '3:41 AM' },
  { id: 29, tool_name: 'Dragline', boolean: 'true', year: '3/20/2023', money: '$3.23', number: 24, time: '4:41 PM' },
  { id: 30, tool_name: 'Compactor', boolean: 'false', year: '4/9/2023', money: '$9.02', number: 66, time: '10:20 PM' },
  { id: 31, tool_name: 'Skid-Steer', boolean: 'false', year: '11/7/2022', money: '$6.14', number: 52, time: '7:11 PM' },
  { id: 32, tool_name: 'Grader', boolean: 'false', year: '11/24/2022', money: '$5.77', number: 59, time: '7:44 PM' },
  { id: 33, tool_name: 'Grader', boolean: 'false', year: '3/2/2023', money: '$3.44', number: 67, time: '4:34 AM' },
  { id: 34, tool_name: 'Dump Truck', boolean: 'false', year: '12/18/2022', money: '$9.78', number: 35, time: '8:48 AM' },
  { id: 35, tool_name: 'Dump Truck', boolean: 'true', year: '1/6/2023', money: '$4.47', number: 65, time: '3:20 PM' },
  { id: 36, tool_name: 'Compactor', boolean: 'true', year: '5/17/2023', money: '$1.07', number: 34, time: '1:11 PM' },
  { id: 37, tool_name: 'Excavator', boolean: 'true', year: '8/7/2023', money: '$6.34', number: 31, time: '9:56 PM' },
  { id: 38, tool_name: 'Crawler', boolean: 'false', year: '9/27/2022', money: '$7.84', number: 34, time: '2:55 AM' },
  { id: 39, tool_name: 'Scraper', boolean: 'false', year: '7/26/2023', money: '$1.53', number: 47, time: '7:56 PM' },
  { id: 40, tool_name: 'Grader', boolean: 'true', year: '6/30/2023', money: '$3.99', number: 18, time: '8:15 PM' },
  { id: 41, tool_name: 'Excavator', boolean: 'false', year: '3/14/2023', money: '$0.65', number: 22, time: '2:00 PM' },
  { id: 42, tool_name: 'Scraper', boolean: 'false', year: '8/30/2023', money: '$0.81', number: 55, time: '1:42 AM' },
  { id: 43, tool_name: 'Dragline', boolean: 'true', year: '5/22/2023', money: '$8.45', number: 77, time: '7:00 AM' },
  { id: 44, tool_name: 'Backhoe', boolean: 'false', year: '6/20/2023', money: '$4.21', number: 94, time: '7:05 PM' },
  { id: 45, tool_name: 'Crawler', boolean: 'false', year: '5/6/2023', money: '$9.94', number: 59, time: '3:44 PM' },
  { id: 46, tool_name: 'Trencher', boolean: 'false', year: '5/6/2023', money: '$4.96', number: 52, time: '11:26 PM' },
  { id: 47, tool_name: 'Dump Truck', boolean: 'true', year: '4/12/2023', money: '$4.85', number: 3, time: '1:42 PM' },
  { id: 48, tool_name: 'Skid-Steer', boolean: 'false', year: '6/4/2023', money: '$4.37', number: 30, time: '8:15 AM' },
  { id: 49, tool_name: 'Dump Truck', boolean: 'false', year: '2/27/2023', money: '$0.89', number: 46, time: '12:05 PM' },
  { id: 50, tool_name: 'Skid-Steer', boolean: 'false', year: '1/3/2023', money: '$6.56', number: 44, time: '5:29 PM' },
  { id: 51, tool_name: 'Excavator', boolean: 'true', year: '7/27/2023', money: '$6.27', number: 11, time: '12:10 PM' },
  { id: 52, tool_name: 'Grader', boolean: 'true', year: '1/27/2023', money: '$4.44', number: 81, time: '9:45 PM' },
  { id: 53, tool_name: 'Compactor', boolean: 'true', year: '3/11/2023', money: '$5.08', number: 53, time: '6:17 AM' },
  { id: 54, tool_name: 'Backhoe', boolean: 'false', year: '11/27/2022', money: '$5.33', number: 66, time: '1:17 PM' },
  { id: 55, tool_name: 'Compactor', boolean: 'false', year: '2/13/2023', money: '$7.00', number: 64, time: '5:01 PM' },
  { id: 56, tool_name: 'Dragline', boolean: 'false', year: '3/6/2023', money: '$3.46', number: 81, time: '9:36 AM' },
  { id: 57, tool_name: 'Excavator', boolean: 'true', year: '10/18/2022', money: '$6.08', number: 94, time: '2:52 AM' },
  { id: 58, tool_name: 'Scraper', boolean: 'true', year: '4/28/2023', money: '$2.89', number: 11, time: '7:38 PM' },
  { id: 59, tool_name: 'Trencher', boolean: 'true', year: '7/17/2023', money: '$5.22', number: 31, time: '9:06 PM' },
  { id: 60, tool_name: 'Excavator', boolean: 'false', year: '2/19/2023', money: '$5.01', number: 69, time: '12:22 AM' },
  { id: 61, tool_name: 'Excavator', boolean: 'false', year: '8/14/2023', money: '$1.63', number: 45, time: '4:58 AM' },
  { id: 62, tool_name: 'Dragline', boolean: 'true', year: '8/28/2023', money: '$5.02', number: 35, time: '7:04 PM' },
  { id: 63, tool_name: 'Grader', boolean: 'true', year: '12/26/2022', money: '$4.82', number: 66, time: '10:29 AM' },
  { id: 64, tool_name: 'Crawler', boolean: 'false', year: '3/15/2023', money: '$0.63', number: 63, time: '2:36 PM' },
  { id: 65, tool_name: 'Skid-Steer', boolean: 'true', year: '5/22/2023', money: '$8.00', number: 17, time: '3:22 AM' },
  { id: 66, tool_name: 'Crawler', boolean: 'true', year: '1/16/2023', money: '$0.74', number: 24, time: '10:13 AM' },
  { id: 67, tool_name: 'Dragline', boolean: 'true', year: '6/13/2023', money: '$7.35', number: 35, time: '5:27 AM' },
  { id: 68, tool_name: 'Grader', boolean: 'false', year: '3/6/2023', money: '$9.15', number: 5, time: '10:18 PM' },
  { id: 69, tool_name: 'Excavator', boolean: 'false', year: '7/4/2023', money: '$0.61', number: 12, time: '10:59 AM' },
  { id: 70, tool_name: 'Backhoe', boolean: 'true', year: '11/16/2022', money: '$9.09', number: 82, time: '7:21 AM' },
  { id: 71, tool_name: 'Excavator', boolean: 'true', year: '4/2/2023', money: '$3.27', number: 7, time: '11:54 PM' },
  { id: 72, tool_name: 'Grader', boolean: 'true', year: '3/26/2023', money: '$4.29', number: 14, time: '7:13 PM' },
  { id: 73, tool_name: 'Crawler', boolean: 'false', year: '1/23/2023', money: '$3.84', number: 21, time: '5:55 PM' },
  { id: 74, tool_name: 'Scraper', boolean: 'true', year: '3/8/2023', money: '$7.41', number: 34, time: '12:08 PM' },
  { id: 75, tool_name: 'Crawler', boolean: 'false', year: '1/6/2023', money: '$7.24', number: 50, time: '12:13 PM' },
  { id: 76, tool_name: 'Backhoe', boolean: 'true', year: '9/13/2023', money: '$6.75', number: 12, time: '8:39 AM' },
  { id: 77, tool_name: 'Skid-Steer', boolean: 'false', year: '5/6/2023', money: '$7.09', number: 50, time: '8:19 PM' },
  { id: 78, tool_name: 'Excavator', boolean: 'true', year: '6/16/2023', money: '$8.25', number: 71, time: '2:55 PM' },
  { id: 79, tool_name: 'Backhoe', boolean: 'false', year: '10/20/2022', money: '$0.73', number: 98, time: '5:17 PM' },
  { id: 80, tool_name: 'Scraper', boolean: 'true', year: '5/29/2023', money: '$7.34', number: 5, time: '10:23 PM' },
  { id: 81, tool_name: 'Crawler', boolean: 'true', year: '12/16/2022', money: '$3.27', number: 13, time: '1:13 AM' },
  { id: 82, tool_name: 'Skid-Steer', boolean: 'false', year: '11/1/2022', money: '$3.78', number: 79, time: '3:19 AM' },
  { id: 83, tool_name: 'Bulldozer', boolean: 'false', year: '12/31/2022', money: '$3.26', number: 18, time: '9:45 AM' },
  { id: 84, tool_name: 'Dump Truck', boolean: 'true', year: '3/3/2023', money: '$6.42', number: 12, time: '6:07 PM' },
  { id: 85, tool_name: 'Trencher', boolean: 'false', year: '12/26/2022', money: '$1.25', number: 26, time: '1:30 PM' },
  { id: 86, tool_name: 'Skid-Steer', boolean: 'false', year: '7/17/2023', money: '$5.42', number: 86, time: '1:27 AM' },
  { id: 87, tool_name: 'Trencher', boolean: 'false', year: '5/4/2023', money: '$3.57', number: 73, time: '7:57 PM' },
  { id: 88, tool_name: 'Backhoe', boolean: 'true', year: '5/25/2023', money: '$2.42', number: 98, time: '2:17 PM' },
  { id: 89, tool_name: 'Compactor', boolean: 'true', year: '5/29/2023', money: '$2.47', number: 49, time: '2:42 PM' },
  { id: 90, tool_name: 'Dump Truck', boolean: 'false', year: '11/8/2022', money: '$6.09', number: 90, time: '5:15 PM' },
  { id: 91, tool_name: 'Dragline', boolean: 'false', year: '9/4/2023', money: '$9.64', number: 41, time: '6:26 PM' },
  { id: 92, tool_name: 'Backhoe', boolean: 'false', year: '7/4/2023', money: '$9.87', number: 46, time: '6:33 AM' },
  { id: 93, tool_name: 'Dump Truck', boolean: 'true', year: '10/24/2022', money: '$3.35', number: 70, time: '4:49 AM' },
  { id: 94, tool_name: 'Scraper', boolean: 'false', year: '2/28/2023', money: '$1.85', number: 97, time: '7:12 AM' },
  { id: 95, tool_name: 'Excavator', boolean: 'true', year: '9/22/2022', money: '$3.00', number: 82, time: '5:57 PM' },
  { id: 96, tool_name: 'Dragline', boolean: 'true', year: '5/5/2023', money: '$2.94', number: 30, time: '7:10 PM' },
  { id: 97, tool_name: 'Scraper', boolean: 'false', year: '4/8/2023', money: '$3.95', number: 4, time: '7:13 PM' },
  { id: 98, tool_name: 'Skid-Steer', boolean: 'true', year: '4/15/2023', money: '$2.03', number: 78, time: '4:57 PM' },
  { id: 99, tool_name: 'Excavator', boolean: 'false', year: '9/1/2023', money: '$8.58', number: 6, time: '11:48 PM' },
  { id: 100, tool_name: 'Dragline', boolean: 'false', year: '9/28/2022', money: '$6.90', number: 35, time: '2:10 PM' }]

export interface Person {
  firstName: string
  lastName: string
  age: number
  visits: number
  status: string
  progress: number
  id: number
}

export const defaultData: Person[] = [
  {
    firstName: 'tanner1',
    lastName: 'linsley',
    age: 24,
    visits: 100,
    status: 'In Relationship',
    progress: 50,
    id: 1
  },
  {
    firstName: 'tandy',
    lastName: 'miller',
    age: 40,
    visits: 40,
    status: 'Single',
    progress: 80,
    id: 2
  },
  {
    firstName: 'joe',
    lastName: 'dirte',
    age: 45,
    visits: 20,
    status: 'Complicated',
    progress: 10,
    id: 3
  },
  {
    firstName: 'tanner4',
    lastName: 'linsley',
    age: 24,
    visits: 100,
    status: 'In Relationship',
    progress: 50,
    id: 4
  },
  {
    firstName: 'tandy',
    lastName: 'miller',
    age: 40,
    visits: 40,
    status: 'Single',
    progress: 80,
    id: 5
  },
  {
    firstName: 'joe',
    lastName: 'dirte',
    age: 45,
    visits: 20,
    status: 'Complicated',
    progress: 10,
    id: 6
  },
  {
    firstName: 'tanner7',
    lastName: 'linsley',
    age: 24,
    visits: 100,
    status: 'In Relationship',
    progress: 50,
    id: 7
  },
  {
    firstName: 'tandy',
    lastName: 'miller',
    age: 40,
    visits: 40,
    status: 'Single',
    progress: 80,
    id: 8
  },
  {
    firstName: 'joe',
    lastName: 'dirte',
    age: 45,
    visits: 20,
    status: 'Complicated',
    progress: 10,
    id: 9
  },
  {
    firstName: 'tanner10',
    lastName: 'linsley',
    age: 24,
    visits: 100,
    status: 'In Relationship',
    progress: 50,
    id: 10
  },
  {
    firstName: 'tandy11',
    lastName: 'miller',
    age: 40,
    visits: 40,
    status: 'Single',
    progress: 80,
    id: 11
  },
  {
    firstName: 'joe12',
    lastName: 'dirte',
    age: 45,
    visits: 20,
    status: 'Complicated',
    progress: 10,
    id: 12
  }
]

import { Card, Typography } from "@material-tailwind/react";

const TABLE_HEAD = ["Name", "Age", "Sex", "Date", ""];

const TABLE_ROWS = [
  {
    name: "John Michael",
    job: "Manager",
    sex: "Male",
    date: "23/04/18",
  },
  {
    name: "Alexa Liras",
    job: "Developer",
    sex: "Male",
    date: "23/04/18",
  },
  {
    name: "Laurent Perrier",
    job: "Executive",
    sex: "Male",
    date: "19/09/17",
  },
  {
    name: "Michael Levi",
    job: "Developer",
    sex: "Male",
    date: "24/12/08",
  },
  {
    name: "Richard Gran",
    job: "Manager",
    sex: "Male",
    date: "04/10/21",
  },
];

export default function Table() {
  return (
    <Card className="h-full w-3/5 overflow-scroll">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
              >
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TABLE_ROWS.map(({ name, job, sex, date }, index) => (
            <tr key={name} className="even:bg-blue-gray-50/50">
              <td className="p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal"
                >
                  {name}
                </Typography>
              </td>
              <td className="p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal"
                >
                  {job}
                </Typography>
              </td>
              <td className="p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal"
                >
                  {sex}
                </Typography>
              </td>
              <td className="p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal"
                >
                  {date}
                </Typography>
              </td>
              <td>
                <a className="p-4 flex" href="#">
                  <Typography
                    as="span"
                    variant="small"
                    color="blue-gray"
                    className="font-medium pr-2"
                  >
                    View
                  </Typography>
                  <svg
                    className="w-4 h-4 pt-1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z" />
                  </svg>
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
}

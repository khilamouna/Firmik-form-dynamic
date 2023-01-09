import React from "react";
import { Formik, Form } from "formik";

const daysOfWeek = [
  "Lundi",
  "Mardi",
  "Mercredi",
  "Jeudi",
  "Vendredi",
  "Samedi",
];

const Index = () => {
  return (
    <Formik
      initialValues={{
        timeRanges: {
          Lundi: {
            start: "",
            end: "",
          },
          Mardi: {
            start: "",
            end: "",
          },
          Mercredi: {
            start: "",
            end: "",
          },
          Jeudi: {
            start: "",
            end: "",
          },
          Vendredi: {
            start: "",
            end: "",
          },
          Samedi: {
            start: "",
            end: "",
          },
        },
      }}
      onSubmit={(values) => {
        alert(JSON.stringify(values, null, 2));
      }}
    >
      {({ handleChange, values }) => (
        <Form>
          <div className="overflow-x-auto">
            <table className="w-full  table-responsive">
              <tbody>
                <tr>
                  <th className="  p-4 border-b border-gray-300 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Jour
                  </th>
                  {daysOfWeek.map((day) => (
                    <td
                      key={day}
                      className="  p-4 border-b border-gray-300 text-left text-xs font-semibold text-gray-700"
                    >
                      {day}
                    </td>
                  ))}
                </tr>
                <tr>
                  <th className="  p-4 border-b border-gray-300 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Début
                  </th>
                  {daysOfWeek.map((day) => (
                    <td
                      key={day}
                      className=" p-4 border-b border-gray-300 text-left text-xs font-semibold text-gray-700"
                    >
                      <input
                        className="  py-2 px-3 border rounded-md focus:outline-none focus:shadow-outline-indigo-300"
                        type="time"
                        name={`timeRanges.${day}.start`}
                        onChange={handleChange}
                        value={values.timeRanges[day].start}
                      />
                    </td>
                  ))}
                </tr>
                <tr>
                  <th className=" p-4 border-b border-gray-300 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Fin
                  </th>
                  {daysOfWeek.map((day) => (
                    <td
                      key={day}
                      className=" p-4 border-b border-gray-300 text-left text-xs font-semibold text-gray-700"
                    >
                      <input
                        className="  py-2 px-3 border rounded-md focus:outline-none focus:shadow-outline-indigo-300"
                        type="time"
                        name={`timeRanges.${day}.end`}
                        onChange={handleChange}
                        value={values.timeRanges[day].end}
                      />
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default Index;

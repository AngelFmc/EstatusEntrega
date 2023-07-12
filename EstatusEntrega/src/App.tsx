import { useState } from "react";

import "./App.css";

function App() {
  return (
    <>
      <div className="w-full items-center">
        <div className="w-[390px] flex flex-row bg-blue-100 ml-[17.3%] mt-4 border-[2px] border-gray-200">
          <h2 className="mr-4 text-center px-10 border-r-2 border-gray-300">
            ESTATUS SEM ENTREGA{" "}
          </h2>
          <h2 className="text-center px-10">Varios elementos 29</h2>
        </div>

        <table className="m-auto mt-5 border-[2px] border-gray-200 ">
          <thead className="border-b-[2px] border-gray-200">
            <tr>
              <th className="px-16 bg-blue-100 border-r-[2px] border-gray-300">
                Suma de Cajas PEDIDOS HF
              </th>
              <th className="px-20 bg-blue-100 border-r-[2px] border-gray-300">
                Etiquetas de columna 14-jul
              </th>
              <th className="p-2 bg-blue-100 border-r-[2px] border-gray-300">
                15-jul
              </th>
              <th className="p-2 bg-blue-100 border-r-[2px] border-gray-300">
                17-jul
              </th>
              <th className="p-2 bg-blue-100 border-r-[2px] border-gray-300">
                18-jul
              </th>
              <th className="p-2 bg-blue-100">19-jul</th>
              <th className="p-2 ">TOTAL</th>
            </tr>
          </thead>

          <tbody>
            <tr className="text-center border-b-[2px] border-gray-200">
              <td className="border-r-[2px] border-gray-300">
                Slice Super Select 72cts
              </td>
              <td className="border-r-[2px] border-gray-300"></td>
              <td className="border-r-[2px] border-gray-300">28</td>
              <td className="border-r-[2px] border-gray-300">42</td>
              <td className="border-r-[2px] border-gray-300">28</td>
              <td className="border-r-[2px] border-gray-300"></td>
              <th>98</th>
            </tr>

            <tr className="text-center border-b-[2px] border-gray-200">
              <td className="border-r-[2px] border-gray-300">Bells cv L</td>
              <td className="border-r-[2px] border-gray-300">326</td>
              <td className="border-r-[2px] border-gray-300">157</td>
              <td className="border-r-[2px] border-gray-300">771</td>
              <td className="border-r-[2px] border-gray-300">207</td>
              <td className="border-r-[2px] border-gray-300">210</td>
              <th className="border-r-[2px] border-gray-300">1671</th>
            </tr>

            <tr className="text-center border-b-[2px] border-gray-200">
              <td className="border-r-[2px] border-gray-300">Grape cv</td>
              <td className="border-r-[2px] border-gray-300"></td>
              <td className="border-r-[2px] border-gray-300">162</td>
              <td className="border-r-[2px] border-gray-300"></td>
              <td className="border-r-[2px] border-gray-300">162</td>
              <td className="border-r-[2px] border-gray-300"></td>
              <th>324</th>
            </tr>

            <tr className="text-center border-b-[2px] border-gray-200">
              <td className="border-r-[2px] border-gray-300">
                Persa CV 20 lbs
              </td>
              <td className="border-r-[2px] border-gray-300">7</td>
              <td className="border-r-[2px] border-gray-300">52</td>
              <td className="border-r-[2px] border-gray-300">97</td>
              <td className="border-r-[2px] border-gray-300">52</td>
              <td className="border-r-[2px] border-gray-300">40</td>
              <th>248</th>
            </tr>

            <tr className="text-center border-b-[2px] border-gray-200">
              <td className="border-r-[2px] border-gray-300">Roma L</td>
              <td className="border-r-[2px] border-gray-300">233</td>
              <td className="border-r-[2px] border-gray-300">147</td>
              <td className="border-r-[2px] border-gray-300">233</td>
              <td className="border-r-[2px] border-gray-300">147</td>
              <td className="border-r-[2px] border-gray-300"></td>
              <th>760</th>
            </tr>

            <tr className="text-center border-b-[2px] border-gray-200">
              <td className="bg-green-600 border-r-[2px] border-gray-300">
                Org bell 11 lbs
              </td>
              <td className="bg-green-600 border-r-[2px] border-gray-300">
                291
              </td>
              <td className="bg-green-600 border-r-[2px] border-gray-300"></td>
              <td className="bg-green-600 border-r-[2px] border-gray-300"></td>
              <td className="bg-green-600 border-r-[2px] border-gray-300"></td>
              <td className="bg-green-600 border-r-[2px] border-gray-300"></td>
              <th>291</th>
            </tr>

            <tr className="text-center border-b-[2px] border-gray-200">
              <td className="bg-green-700 border-r-[2px] border-gray-300">
                Org bell 25 lbs
              </td>
              <td className="bg-green-700 border-r-[2px] border-gray-300">
                182
              </td>
              <td className="bg-green-700 border-r-[2px] border-gray-300"></td>
              <td className="bg-green-700 border-r-[2px] border-gray-300"></td>
              <td className="bg-green-700 border-r-[2px] border-gray-300"></td>
              <td className="bg-green-700 border-r-[2px] border-gray-300"></td>
              <th>182</th>
            </tr>

            <tr className="text-center border-b-[2px] border-gray-200">
              <td className="bg-green-700 border-r-[2px] border-gray-300">
                Roma org xl
              </td>
              <td className="bg-green-700 border-r-[2px] border-gray-300">
                175
              </td>
              <td className="bg-green-700 border-r-[2px] border-gray-300"></td>
              <td className="bg-green-700 border-r-[2px] border-gray-300"></td>
              <td className="bg-green-700 border-r-[2px] border-gray-300"></td>
              <td className="bg-green-700 border-r-[2px] border-gray-300"></td>
              <th>175</th>
            </tr>

            <tr className="text-center border-b-[2px] border-gray-200">
              <td className="bg-green-700 border-r-[2px] border-gray-300">
                Grape org
              </td>
              <td className="bg-green-700 border-r-[2px] border-gray-300">
                21
              </td>
              <td className="bg-green-700 border-r-[2px] border-gray-300"></td>
              <td className="bg-green-700 border-r-[2px] border-gray-300"></td>
              <td className="bg-green-700 border-r-[2px] border-gray-300"></td>
              <td className="bg-green-700 border-r-[2px] border-gray-300"></td>
              <th>21</th>
            </tr>

            <tr className="text-center border-b-[2px] border-gray-200">
              <td className="bg-green-700 border-r-[2px] border-gray-300">
                Green bell org #1
              </td>
              <td className="bg-green-700 border-r-[2px] border-gray-300">
                16
              </td>
              <td className="bg-green-700 border-r-[2px] border-gray-300"></td>
              <td className="bg-green-700 border-r-[2px] border-gray-300"></td>
              <td className="bg-green-700 border-r-[2px] border-gray-300"></td>
              <td className="bg-green-700 border-r-[2px] border-gray-300"></td>
              <th>16</th>
            </tr>

            <tr className="text-center border-b-[2px] border-gray-200">
              <td className="bg-green-700 border-r-[2px] border-gray-300">
                Green bell org #2
              </td>
              <td className="bg-green-700 border-r-[2px] border-gray-300">
                25
              </td>
              <td className="bg-green-700 border-r-[2px] border-gray-300"></td>
              <td className="bg-green-700 border-r-[2px] border-gray-300"></td>
              <td className="bg-green-700 border-r-[2px] border-gray-300"></td>
              <td className="bg-green-700 border-r-[2px] border-gray-300"></td>
              <th>25</th>
            </tr>
          </tbody>

          <tfoot className="bg-blue-100">
            <tr>
              <th>Total general</th>
              <th>1276</th>
              <th>546</th>
              <th>1143</th>
              <th>596</th>
              <th>250</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </>
  );
}

export default App;

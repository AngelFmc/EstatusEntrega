import { useState } from "react";

import "./App.css";

function App() {
  return (
    <>
      <div className="w-full items-center">
        <div className="w-[390px] flex flex-row bg-blue-100 ml-[17.3%] mt-4">
          <h2 className="mr-4 text-center px-10">ESTATUS SEM ENTREGA </h2>
          <h2 className="text-center px-10">Varios elementos 29</h2>
        </div>

        <table className="m-auto mt-5 ">
          <thead>
            <tr>
              <th className="px-16 bg-blue-100 ">Suma de Cajas PEDIDOS HF</th>
              <th className="px-20 bg-blue-100">Etiquetas de columna 14-jul</th>
              <th className="p-2 bg-blue-100">15-jul</th>
              <th className="p-2 bg-blue-100">17-jul</th>
              <th className="p-2 bg-blue-100">18-jul</th>
              <th className="p-2 bg-blue-100">19-jul</th>
              <th className="p-2 ">TOTAL</th>
            </tr>
          </thead>

          <tbody>
            <tr className="text-center">
              <td>Slice Super Select 72cts</td>
              <td></td>
              <td>28</td>
              <td>42</td>
              <td>28</td>
              <td></td>
              <th>98</th>
            </tr>

            <tr className="text-center">
              <td>Bells cv L</td>
              <td>326</td>
              <td>157</td>
              <td>771</td>
              <td>207</td>
              <td>210</td>
              <th>1671</th>
            </tr>

            <tr className="text-center">
              <td>Grape cv</td>
              <td></td>
              <td>162</td>
              <td></td>
              <td>162</td>
              <td></td>
              <th>324</th>
            </tr>

            <tr className="text-center">
              <td>Persa CV 20 lbs</td>
              <td>7</td>
              <td>52</td>
              <td>97</td>
              <td>52</td>
              <td>40</td>
              <th>248</th>
            </tr>

            <tr className="text-center">
              <td>Roma L</td>
              <td>233</td>
              <td>147</td>
              <td>233</td>
              <td>147</td>
              <td></td>
              <th>760</th>
            </tr>

            <tr className="text-center">
              <td className="bg-green-600">Org bell 11 lbs</td>
              <td className="bg-green-600">291</td>
              <td className="bg-green-600"></td>
              <td className="bg-green-600"></td>
              <td className="bg-green-600"></td>
              <td className="bg-green-600"></td>
              <th>291</th>
            </tr>

            <tr className="text-center">
              <td className="bg-green-700">Org bell 25 lbs</td>
              <td className="bg-green-700">182</td>
              <td className="bg-green-700"></td>
              <td className="bg-green-700"></td>
              <td className="bg-green-700"></td>
              <td className="bg-green-700"></td>
              <th>182</th>
            </tr>

            <tr className="text-center">
              <td className="bg-green-700">Roma org xl</td>
              <td className="bg-green-700">175</td>
              <td className="bg-green-700"></td>
              <td className="bg-green-700"></td>
              <td className="bg-green-700"></td>
              <td className="bg-green-700"></td>
              <th>175</th>
            </tr>

            <tr className="text-center">
              <td className="bg-green-700">Grape org</td>
              <td className="bg-green-700">21</td>
              <td className="bg-green-700"></td>
              <td className="bg-green-700"></td>
              <td className="bg-green-700"></td>
              <td className="bg-green-700"></td>
              <th>21</th>
            </tr>

            <tr className="text-center">
              <td className="bg-green-700">Green bell org #1</td>
              <td className="bg-green-700">16</td>
              <td className="bg-green-700"></td>
              <td className="bg-green-700"></td>
              <td className="bg-green-700"></td>
              <td className="bg-green-700"></td>
              <th>16</th>
            </tr>

            <tr className="text-center">
              <td className="bg-green-700">Green bell org #2</td>
              <td className="bg-green-700">25</td>
              <td className="bg-green-700"></td>
              <td className="bg-green-700"></td>
              <td className="bg-green-700"></td>
              <td className="bg-green-700"></td>
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

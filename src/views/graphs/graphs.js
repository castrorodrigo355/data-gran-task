import React, { useState } from "react";
import { SimpleSelect } from "../../components/simpleSelect/simpleSelect";
import { CustomButton } from "../../components/customButton/customButton";
import { mapArrayData } from "../../helperFunctions/graphs/functions";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import CSVReader from "react-csv-reader";
import "./graphs.css";

export const Graphs = () => {
  const [abscSelection, setAbscSelection] = useState(null);

  const [ordSelection, setOrdSelection] = useState(null);

  const [dataFile, setDataFile] = useState(null);

  const [chartOptions, setChartOptions] = useState({
    title: {
      text: ".CSV Graph"
    },
    xAxis: { categories: ["Origin", "Destiny"] },
    series: [{ data: [1, 2] }],
    plotOptions: {
      series: {
        point: {
          events: {
            mouseOver: e => setHoverData(e)
          }
        }
      }
    },
    hoverData: null
  });

  const setHoverData = e =>
    setChartOptions({ ...chartOptions, hoverData: e.target.category });

  const applySelections = () => {
    setChartOptions({
      ...chartOptions,
      xAxis: {
        categories: [abscSelection.description, ordSelection.description]
      },
      series: [{ data: [abscSelection.value, ordSelection.value] }]
    });
  };

  return (
    <div>
      <div className="graphs--main--container--process--selections">
        <div className="graphs--main--container--process--selections--input--file">
          <div className="container--input--file">
            <CSVReader
              onFileLoaded={data => {
                const finalData = mapArrayData(data);
                setDataFile(finalData);
              }}
            />
          </div>
        </div>
        <div className="graphs--main--container--process--selections--dropdowns">
          <SimpleSelect
            title="Origin"
            placeholderSelection="Choose First Coord Point"
            options={dataFile}
            selection={abscSelection}
            setSelection={setAbscSelection}
            disabled={!dataFile}
          />

          <SimpleSelect
            title="Destiny"
            placeholderSelection="Choose Second Coord Point"
            options={dataFile}
            selection={ordSelection}
            setSelection={setOrdSelection}
            disabled={!dataFile}
          />

          <CustomButton
            type="button"
            onClick={() => applySelections()}
            buttonStyle="btn--primary"
            buttonSize="btn--medium"
            disabled={!abscSelection || !ordSelection}
          >
            Apply
          </CustomButton>
        </div>
      </div>
      <HighchartsReact highcharts={Highcharts} options={chartOptions} />
    </div>
  );
};

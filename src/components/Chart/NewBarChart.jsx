import React, { useState, useEffect } from 'react';
import { Line, Bar } from 'react-chartjs-2';
import { fetchCountHistory } from '../../api';
import styles from './Chart.module.css';

const newBarChart = async ({data}) => {

    const [monhtData, setMonhtData] = useState({});

    useEffect(() => {
        const fetchMyAPI = async () => {
          const initialApiData = await fetchCountHistory();
    
          setMonhtData(initialApiData);
        };
    
        fetchMyAPI();
      }, []);
    
      const barChart = (
     
          <Bar
            data={{
              labels: ['Infected', 'Recovered', 'Deaths'],
              datasets: [
                {
                  label: 'People',
                  backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
                  data: [],
                },
              ],
            }}
            options={{
              legend: { display: false },
              title: { display: true, text: `Current state in` },
            }}
          />
     
      );

    return(
        <div className="new chart">
            { barChart }
        </div>
    );
}

export default newBarChart;
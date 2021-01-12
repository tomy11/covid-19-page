import React, { useState, useEffect } from 'react';
import { Line, Bar } from 'react-chartjs-2';

import styles from './Chart.module.css';

const Chart = () => {
    <div className={styles.container}>
        {country ? barChart : lineChart}
    </div>
}

export default Chart;
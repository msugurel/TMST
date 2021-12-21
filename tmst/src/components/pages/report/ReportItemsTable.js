import React from 'react';
import {View, StyleSheet } from '@react-pdf/renderer';
import ReportTableHeader from './ReportTableHeader'
import ReportTableRow from './ReportTableRow'
import ReportTableBlankSpace from './ReportTableBlankSpace'
import ReportTableFooter from './ReportTableFooter'

const tableRowsCount = 11;

const styles = StyleSheet.create({
    tableContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 24,
        borderWidth: 1,
        borderColor: '#bff0fd',
    },
});

  const ReportItemsTable = ({data}) => (      
    <View style={styles.tableContainer}>
        <ReportTableHeader />
        <ReportTableRow items={data} />
        {/* <ReportTableBlankSpace rowsCount={Math.abs(tableRowsCount - data.length)} /> */}
        <ReportTableFooter items={data} />
    </View>
  );
  
  export default ReportItemsTable
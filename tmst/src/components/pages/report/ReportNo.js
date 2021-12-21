import React, { Fragment } from 'react';
import {Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    invoiceNoContainer: {
        flexDirection: 'row',
        marginTop: 36,
        justifyContent: 'flex-end'
    },
    invoiceDateContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    invoiceDate: {
            fontSize: 12,
            fontStyle: 'bold',
    },
    label: {
        width: 60
    }
    
  });


  const ReportNo = ({ReportNo,ReportDate}) => (
        <Fragment>
            <View style={styles.invoiceNoContainer}>
                <Text style={styles.label}>Rapor No:</Text>
                <Text style={styles.invoiceDate}>{ReportNo}</Text>
            </View >
            <View style={styles.invoiceDateContainer}>
                <Text style={styles.label}>Tarih: </Text>
                <Text >{ReportDate}</Text>
            </View >
        </Fragment>
  );
  
  export default ReportNo
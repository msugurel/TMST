import React from 'react';
import {Text, View, StyleSheet } from '@react-pdf/renderer';

const borderColor = '#90e5fc'
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderBottomColor: '#bff0fd',
        backgroundColor: '#bff0fd',
        borderBottomWidth: 1,
        alignItems: 'center',
        height: 24,
        textAlign: 'center',
        fontStyle: 'bold',
        flexGrow: 1,
    },
    description: {
        width: '50%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
    },
    qty: {
        width: '20%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
    },
    rate: {
        width: '20%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
    },
    amount: {
        width: '10%'
    },
  });

  const ReportTableHeader = () => (
    <View style={styles.container}>
        <Text style={styles.description}>Malzeme</Text>
        <Text style={styles.qty}>Personel</Text>
        <Text style={styles.rate}>Yer</Text>
        <Text style={styles.amount}>Miktar</Text>
    </View>
  );
  
  export default ReportTableHeader
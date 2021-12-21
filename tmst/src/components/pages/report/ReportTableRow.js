import React, {Fragment} from 'react';
import {Text, View, StyleSheet } from '@react-pdf/renderer';

const borderColor = '#90e5fc'
const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        borderBottomColor: '#bff0fd',
        borderBottomWidth: 1,
        alignItems: 'center',
        height: 24,
        fontStyle: 'bold',
    },
    description: {
        width: '50%',
        textAlign: 'left',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        paddingLeft: 8,
    },
    qty: {
        width: '20%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        textAlign: 'left',
        paddingLeft: 8,
    },
    rate: {
        width: '20%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        textAlign: 'left',
        paddingLeft: 8,
    },
    amount: {
        width: '10%',
        textAlign: 'right',
        paddingRight: 8,
    },
  });


const ReportTableRow = ({items}) => {
    console.log(items,2222)
    const rows = items.map( item => 
        <View style={styles.row} key={item._id.toString()}>
            <Text style={styles.description}>{item.MaterialName}</Text>
            <Text style={styles.qty}>{item.UserName + " " + item.UserSurname}</Text>
            <Text style={styles.rate}>{item.WarehouseName}</Text>
            <Text style={styles.amount}>{item.Quantity}</Text>
        </View>
    )
    return (<Fragment>{items ? rows : ""}</Fragment> )
};
  
  export default ReportTableRow
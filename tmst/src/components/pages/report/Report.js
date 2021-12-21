import React from "react";
import {
    Page,
    Text,
    View,
    Document,
    StyleSheet,
    Image
} from "@react-pdf/renderer";
import moment from "moment";
import ReportTitle from "./ReportTitle";
import ReportNo from "./ReportNo";
import ReportThankYouMsg from "./ReportThankYouMsg";
import ReportItemsTable from "./ReportItemsTable";

const styles = StyleSheet.create({
    page: {
        fontFamily: 'Helvetica',
        fontSize: 11,
        paddingTop: 30,
        paddingLeft: 60,
        paddingRight: 60,
        lineHeight: 1.5,
        flexDirection: 'column',
    },
    logo: {
        width: 74,
        height: 66,
        marginLeft: 'auto',
        marginRight: 'auto'
    }
});

export function PdfDocument(props) {
    console.log("fff pdf props", props.data);
    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <Image style={styles.logo} src='https://react.semantic-ui.com/logo.png' />
                <ReportTitle title='Malzeme Kullanım Raporu' />
                <ReportNo ReportNo={moment().format('YYMMDDHHMMSS')} ReportDate={moment().format('DD.MM.YYYY')}/>
                <ReportItemsTable data={props.data}/>
                <ReportThankYouMsg ReportTitle='TIBBI MALZEME STOK SISTEMI RAPORLADI.'/>
                {/* {props.data
                    ? props.data.map((item, index) => {
                        return (
                            <View>
                                <View style={styles.section}>
                                    <Text>Section #1</Text>
                                </View>
                                <View style={styles.section}>
                                    <Text>Section #2</Text>
                                </View>
                            </View>
                        );
                    })
                    : ""} */}
            </Page>
        </Document>
    );
}
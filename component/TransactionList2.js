import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import TransactionItem from "./TransactionItem";

function TransactionList({ data }) {
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Transaction History</Text>
        <View style={styles.divider} />
        {/* Transaction Items */}
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          showsVerticalScrollIndicator={false}
        >
          <TransactionItem></TransactionItem>
          {/* {data && data.length > 0 ? (
          data.map((item, index) => <TransactionItem key={index} {...item} />)
        ) : (
          <Text style={styles.noDataText}>No transactions available</Text>
        )} */}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 24,
    paddingBottom: 24,
    backgroundColor: "red",
  },
  header: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    marginBottom: 16,
  },
  headerText: {
    color: "black",
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 8,
  },
  divider: {
    width: "100%",
    height: 1,
    backgroundColor: "#E5E5E5",
  },
  scrollContainer: {
    gap: 20,
    paddingBottom: 10,
  },
  noDataText: {
    textAlign: "center",
    color: "#A9A9A9",
    fontSize: 16,
    marginTop: 20,
  },
});

export default TransactionList;

import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import TransactionItem from "./TransactionItem";
import { useAuth } from "../context/AuthContext";
import { getTransaction } from "../api/restApi";

function TransactionList() {
  const { userData } = useAuth();
  const [transactions, setTransactions] = useState();

  const fetchTransaction = async () => {
    try {
      const response = await getTransaction();
      console.log(response);
      setTransactions(response);
    } catch (error) {
      console.log("error fetchTransaction", error);
      throw new Error("Failed to fetch data: " + error);
    }
  };

  useEffect(() => {
    fetchTransaction();
  }, [userData]);

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Transaction History</Text>
        <View style={styles.divider} />
        {/* Transaction Items */}
        <ScrollView
          nestedScrollEnabled={true}
          contentContainerStyle={styles.scrollContainer}
          showsVerticalScrollIndicator={false}
        >
          {/* <TransactionItem></TransactionItem>
          <TransactionItem></TransactionItem> */}
          {transactions && transactions.length > 0 ? (
          transactions.map((transaction, index) => <TransactionItem key={index} {...transaction} />)
        ) : (
          <Text style={styles.noDataText}>No transactions available</Text>
        )}
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
    height: 400,
    marginBottom: 24,
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
    marginBottom: 16,
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

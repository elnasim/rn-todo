import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { loadTodos } from "../store/actions/todoActions";

export default function MainScreen() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTodos());
  }, [dispatch]);

  const allTodos = useSelector((state) => state.todo.allTodos);
  console.log(allTodos);

  return (
    <View>
      <Text>111</Text>
    </View>
  );
}

const styles = StyleSheet.create({});

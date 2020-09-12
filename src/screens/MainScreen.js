import React, { useEffect } from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  TouchableOpacity,
  Text,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Appbar, List } from "react-native-paper";
import { SwipeItem, SwipeButtonsContainer } from "react-native-swipe-item";
import { loadTodos, toggleTodo } from "../store/actions/todoActions";

export default function MainScreen() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTodos());
  }, [dispatch]);

  const todos = useSelector((state) => state.todo.allTodos);

  const leftButton = (
    <SwipeButtonsContainer
      style={{
        alignSelf: "center",
        aspectRatio: 1,
        flexDirection: "column",
        padding: 10,
      }}
    >
      <TouchableOpacity onPress={() => console.log("left button clicked")}>
        <Text>Click me !</Text>
      </TouchableOpacity>
    </SwipeButtonsContainer>
  );

  return (
    <View>
      <Appbar.Header>
        <Appbar.Content title="Задачи" />
        <Appbar.Action icon="plus-circle" onPress={() => {}} />
      </Appbar.Header>

      <ScrollView>
        {todos.map((item) => {
          if (item.title) {
            return (
              <List.Section key={item.id}>
                <List.Subheader>{item.title}</List.Subheader>

                {item.todos.map((item) => {
                  if (item.checked) {
                    return (
                      <SwipeItem
                        style={styles.button}
                        swipeContainerStyle={styles.swipeContentContainerStyle}
                        leftButtons={leftButton}
                      >
                        <List.Item
                          title={item.text}
                          left={() => (
                            <List.Icon icon="checkbox-blank-circle-outline" />
                          )}
                          onPress={() => {
                            dispatch(toggleTodo(item.id, item.list_id));
                          }}
                          key={item.id}
                        />
                      </SwipeItem>
                    );
                  }
                })}

                <List.Accordion
                  title="Завершенные"
                  left={() => <List.Icon icon="chevron-down" />}
                  titleStyle={{ color: "#000" }}
                  theme={{
                    colors: {
                      text: "#fff",
                    },
                  }}
                >
                  {item.todos.map((item) => {
                    if (!item.checked) {
                      return (
                        <List.Item
                          title={item.text}
                          left={() => <List.Icon icon="check" />}
                          onPress={() => {
                            dispatch(toggleTodo(item.id, item.list_id));
                          }}
                          key={item.id}
                        />
                      );
                    }
                  })}
                </List.Accordion>
              </List.Section>
            );
          }
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "80%",
    height: 100,
    alignSelf: "center",
    marginVertical: 5,
  },
  swipeContentContainerStyle: {
    flexDirection: 'column',
    padding: 0,
    alignItems: "flex-start",
    backgroundColor: "#ffffff",
  },
});

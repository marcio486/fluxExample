import React from "react";
import { StyleSheet, Text, View } from "react-native";

import allReducers from "./src/flux/reducers/index.js";
import { createStore } from "redux";
import { Provider } from "react-redux";

const store = createStore(allReducers);

import Tela1 from './src/Tela1'

export default function App() {
	return (
		<Provider store={store}>
			<Tela1 />
		</Provider>
	);
}

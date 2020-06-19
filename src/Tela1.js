import React from "react";
import {
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
    TextInput,
    Alert
} from "react-native";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { setText } from "./flux/actions/textoIndex";

const Tela1 = (props) => {
	return (
		<View style={styles.container}>
			<View style={styles.textoContainer}>
				<TextInput
					style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
					onChangeText={(text) => props.setText(text)}
					value={props.texto}
				/>
			</View>
            <TouchableOpacity  style={{...styles.textoContainer,borderWidth:1,justifyContent: "center",backgroundColor:'lightgray'}} onPress={() => Alert.alert(props.texto)}>
                <Text> Valor em props.texto</Text>
            </TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		justifyContent: "center",
	},
	textoContainer: {
		width: "50%",
		height: "30%",
	},
});

function mapStateToProps(state) {
	return {
		texto: state.texto.texto,
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(
		{
			setText: setText,
		},
		dispatch
	);
}

export default connect(mapStateToProps, mapDispatchToProps)(Tela1);

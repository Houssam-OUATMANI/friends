import React from "react"
import {
	StyleSheet,
	Text,
	View,
	Image,
	TouchableOpacity,
	ImageBackground,
} from "react-native"

export default function WelcomeScreen() {
	return (
		<View style={container}>
			<Image
				style={image}
				resizeMode="cover"
				source={require("../assets/friends.jpg")}
			/>
			<View style={textContainer}>
				<ImageBackground
					style={backImage}
					resizeMode="cover"
					source={require("../assets/background.jpg")}></ImageBackground>
			</View>
			<View style={textSection}>
				<View>
					<Text style={text}>Connais-tu vraiment la serie</Text>
				</View>
				<View>
					<Text style={text}>Teste tes connaissances avec ce quiz</Text>
				</View>
			</View>

			<TouchableOpacity style={playButton}>
				<Text style={textButton}>Jouer</Text>
			</TouchableOpacity>
		</View>
	)
}

const styles = StyleSheet.create({
	backImage: {
		alignItems: "center",
		justifyContent: "center",
		width: "100%",
		height: 250,
	},
	container: {
		backgroundColor: "#000",
		flex: 1,

		alignItems: "center",
	},
	image: {
		marginTop: 30,
		width: "100%",
		height: 90,
	},
	playButton: {
		width: "60%",
		height: 50,
		backgroundColor: "#E32725",
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 5,
	},
	textContainer: {
		width: "100%",
		height: 350,
		justifyContent: "center",
		alignItems: "center",
	},
	text: {
		color: "#ddd",
		fontSize: 23,
		fontStyle: "italic",
		marginVertical: 10,
	},
	textButton: {
		color: "#000",
		fontSize: 30,
		fontWeight: "bold",
		fontStyle: "italic",
	},
	textView: {
		backgroundColor: "#00000090",
		width: "95%",
		justifyContent: "center",
		alignItems: "center",
		marginTop: 10,
		paddingVertical: 10,
		borderRadius: 5,
	},
   textSection : {
      justifyContent: "center",
		alignItems: "center",
      height : 100,
      marginBottom : 40

   }
})

const {
	backImage,
	container,
	image,
	playButton,
	textContainer,
	text,
	textButton,
	textView,
   textSection
} = styles

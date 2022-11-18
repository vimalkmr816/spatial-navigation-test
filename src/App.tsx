/**
 * Since this file is for development purposes only, some of the dependencies are in devDependencies
 * Disabling ESLint rules for these dependencies since we know it is only for development purposes
 */

import React from "react"
// eslint-disable-next-line import/no-extraneous-dependencies
import ReactDOMClient from "react-dom/client"
// eslint-disable-next-line import/no-extraneous-dependencies
import { init } from "@noriginmedia/norigin-spatial-navigation"
import styled, { createGlobalStyle } from "styled-components"
import { Content } from "./Content"
import { Menu } from "./Menu"

init({
	debug: false,
	visualDebug: false,
})

export const rows = [
	{
		title: "Recommended",
	},
	{
		title: "Movies",
	},
	{
		title: "Series",
	},
	{
		title: "TV Channels",
	},
	{
		title: "Sport",
	},
]

export const assets = [
	{
		title: "Asset 1",
		color: "#714ADD",
	},
	{
		title: "Asset 2",
		color: "#AB8DFF",
	},
	{
		title: "Asset 3",
		color: "#512EB0",
	},
	{
		title: "Asset 4",
		color: "#714ADD",
	},
	{
		title: "Asset 5",
		color: "#AB8DFF",
	},
	{
		title: "Asset 6",
		color: "#512EB0",
	},
	{
		title: "Asset 7",
		color: "#714ADD",
	},
	{
		title: "Asset 8",
		color: "#AB8DFF",
	},
	{
		title: "Asset 9",
		color: "#512EB0",
	},
]

interface MenuItemBoxProps {
	focused: boolean
}

export const MenuItemBox = styled.div<MenuItemBoxProps>`
	width: 171px;
	height: 51px;
	background-color: #b056ed;
	border-color: white;
	border-style: solid;
	border-width: ${({ focused }) => (focused ? "6px" : 0)};
	box-sizing: border-box;
	border-radius: 7px;
	margin-bottom: 37px;
`

interface MenuWrapperProps {
	hasFocusedChild: boolean
}

export const MenuWrapper = styled.div<MenuWrapperProps>`
	flex: 1;
	max-width: 246px;
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: ${({ hasFocusedChild }) => (hasFocusedChild ? "#4e4181" : "#362C56")};
	padding-top: 37px;
`

export const NmLogo = styled.img`
	height: 57px;
	width: 175px;
	margin-bottom: 51px;
`

export interface MenuProps {
	focusKey: string
}

export const AssetWrapper = styled.div`
	margin-right: 22px;
	display: flex;
	flex-direction: column;
`

interface AssetBoxProps {
	focused: boolean
	color: string
}

export const AssetBox = styled.div<AssetBoxProps>`
	width: 225px;
	height: 127px;
	background-color: ${({ color }) => color};
	border-color: white;
	border-style: solid;
	border-width: ${({ focused }) => (focused ? "6px" : 0)};
	box-sizing: border-box;
	border-radius: 7px;
`

export const AssetTitle = styled.div`
	color: white;
	margin-top: 10px;
	font-family: "Segoe UI";
	font-size: 24px;
	font-weight: 400;
`

export const ContentRowWrapper = styled.div`
	margin-bottom: 37px;
`

export const ContentRowTitle = styled.div`
	color: white;
	margin-bottom: 22px;
	font-size: 27px;
	font-weight: 700;
	font-family: "Segoe UI";
	padding-left: 60px;
`

export const ContentRowScrollingWrapper = styled.div`
	overflow-x: auto;
	overflow-y: hidden;
	flex-shrink: 1;
	flex-grow: 1;
	padding-left: 60px;
`

export const ContentRowScrollingContent = styled.div`
	display: flex;
	flex-direction: row;
`

export const ContentWrapper = styled.div`
	flex: 1;
	overflow: hidden;
	display: flex;
	flex-direction: column;
`

export const ContentTitle = styled.div`
	color: white;
	font-size: 48px;
	font-weight: 600;
	font-family: "Segoe UI";
	text-align: center;
	margin-top: 52px;
	margin-bottom: 37px;
`

export const SelectedItemWrapper = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
`

export const SelectedItemBox = styled.div`
	height: 282px;
	width: 1074px;
	background-color: ${({ color }) => color};
	margin-bottom: 37px;
	border-radius: 7px;
`

export const SelectedItemTitle = styled.div`
	position: absolute;
	bottom: 75px;
	left: 100px;
	color: white;
	font-size: 27px;
	font-weight: 400;
	font-family: "Segoe UI";
`

export const ScrollingRows = styled.div`
	overflow-y: auto;
	overflow-x: hidden;
	flex-shrink: 1;
	flex-grow: 1;
`

const AppContainer = styled.div`
	background-color: #221c35;
	width: 100vw;
	height: 100vh;
	display: flex;
	flex-direction: row;
`

const GlobalStyle = createGlobalStyle`
  ::-webkit-scrollbar {
    display: none;
  }
`

export default function App() {
	return (
		<React.StrictMode>
			<AppContainer>
				<GlobalStyle />
				<Menu focusKey="MENU" />
				<Content />
			</AppContainer>
		</React.StrictMode>
	)
}

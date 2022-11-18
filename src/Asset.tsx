import { FocusableComponentLayout, FocusDetails, KeyPressDetails, useFocusable } from "@noriginmedia/norigin-spatial-navigation"
import React from "react"
import { AssetBox, AssetTitle, AssetWrapper } from "./App"

export interface AssetProps {
	title: string
	color: string
	onEnterPress: (props: object, details: KeyPressDetails) => void
	onFocus: (layout: FocusableComponentLayout, props: object, details: FocusDetails) => void
}
export function Asset({ title, color, onEnterPress, onFocus }: AssetProps) {
	const { ref, focused } = useFocusable({
		onEnterPress,
		onFocus,
		extraProps: {
			title,
			color,
		},
	})

	return (
		<AssetWrapper ref={ref}>
			<AssetBox color={color} focused={focused} />
			<AssetTitle>{title}</AssetTitle>
		</AssetWrapper>
	)
}

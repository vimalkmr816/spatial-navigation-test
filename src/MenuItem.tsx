import { useFocusable } from "@noriginmedia/norigin-spatial-navigation"
import React from "react"
import { MenuItemBox } from "./App"

export function MenuItem() {
	const { ref, focused } = useFocusable()

	return <MenuItemBox ref={ref} focused={focused} />
}

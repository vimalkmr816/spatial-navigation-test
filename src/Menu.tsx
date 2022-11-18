import { FocusContext, useFocusable } from "@noriginmedia/norigin-spatial-navigation"
import React, { useEffect } from "react"
import { MenuProps, MenuWrapper, NmLogo } from "./App"
import { MenuItem } from "./MenuItem"

export function Menu({ focusKey: focusKeyParam }: MenuProps) {
	const {
		ref,
		focusSelf,
		hasFocusedChild,
		focusKey,
		// setFocus, -- to set focus manually to some focusKey
		// navigateByDirection, -- to manually navigate by direction
		// pause, -- to pause all navigation events
		// resume, -- to resume all navigation events
		// updateAllLayouts, -- to force update all layouts when needed
		// getCurrentFocusKey -- to get the current focus key
	} = useFocusable({
		focusable: true,
		saveLastFocusedChild: false,
		trackChildren: true,
		autoRestoreFocus: true,
		isFocusBoundary: false,
		focusKey: focusKeyParam,
		preferredChildFocusKey: null,
		onEnterPress: () => {},
		onEnterRelease: () => {},
		onArrowPress: () => true,
		onFocus: () => {},
		onBlur: () => {},
		extraProps: { foo: "bar" },
	})

	useEffect(() => {
		focusSelf()
	}, [focusSelf])

	return (
		<FocusContext.Provider value={focusKey}>
			<MenuWrapper ref={ref} hasFocusedChild={hasFocusedChild}>
				<NmLogo />
				<MenuItem />
				<MenuItem />
				<MenuItem />
				<MenuItem />
				<MenuItem />
			</MenuWrapper>
		</FocusContext.Provider>
	)
}

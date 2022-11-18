import { FocusableComponentLayout, FocusContext, FocusDetails, KeyPressDetails, useFocusable } from "@noriginmedia/norigin-spatial-navigation"
import React, { useCallback, useRef } from "react"
import { assets, ContentRowScrollingContent, ContentRowScrollingWrapper, ContentRowTitle, ContentRowWrapper } from "./App"
import { Asset } from "./Asset"

interface ContentRowProps {
	title: string
	onAssetPress: (props: object, details: KeyPressDetails) => void
	onFocus: (layout: FocusableComponentLayout, props: object, details: FocusDetails) => void
}
export function ContentRow({ title: rowTitle, onAssetPress, onFocus }: ContentRowProps) {
	const { ref, focusKey } = useFocusable({
		onFocus,
	})

	const scrollingRef = useRef(null)

	const onAssetFocus = useCallback(
		({ x }: { x: number }) => {
			scrollingRef.current.scrollTo({
				left: x,
				behavior: "smooth",
			})
		},
		[scrollingRef]
	)

	return (
		<FocusContext.Provider value={focusKey}>
			<ContentRowWrapper ref={ref}>
				<ContentRowTitle>{rowTitle}</ContentRowTitle>
				<ContentRowScrollingWrapper ref={scrollingRef}>
					<ContentRowScrollingContent>
						{assets.map(({ title, color }) => (
							<Asset key={title} title={title} color={color} onEnterPress={onAssetPress} onFocus={onAssetFocus} />
						))}
					</ContentRowScrollingContent>
				</ContentRowScrollingWrapper>
			</ContentRowWrapper>
		</FocusContext.Provider>
	)
}

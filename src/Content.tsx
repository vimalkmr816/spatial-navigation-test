import { FocusContext, useFocusable } from "@noriginmedia/norigin-spatial-navigation"
import React, { useCallback, useState } from "react"
import { ContentTitle, ContentWrapper, rows, ScrollingRows, SelectedItemBox, SelectedItemTitle, SelectedItemWrapper } from "./App"
import { AssetProps } from "./Asset"
import { ContentRow } from "./ContentRow"

export function Content() {
	const { ref, focusKey } = useFocusable()

	const [selectedAsset, setSelectedAsset] = useState(null)

	const onAssetPress = useCallback((asset: AssetProps) => {
		setSelectedAsset(asset)
	}, [])

	const onRowFocus = useCallback(
		({ y }: { y: number }) => {
			ref.current.scrollTo({
				top: y,
				behavior: "smooth",
			})
		},
		[ref]
	)

	return (
		<FocusContext.Provider value={focusKey}>
			<ContentWrapper>
				<ContentTitle>Norigin Spatial Navigation</ContentTitle>
				<SelectedItemWrapper>
					<SelectedItemBox color={selectedAsset ? selectedAsset?.color : "#565b6b"} />
					<SelectedItemTitle>{selectedAsset ? selectedAsset?.title : 'Press "Enter" to select an asset'}</SelectedItemTitle>
				</SelectedItemWrapper>
				<ScrollingRows ref={ref}>
					<div>
						{rows.map(({ title }) => (
							<ContentRow key={title} title={title} onAssetPress={onAssetPress} onFocus={onRowFocus} />
						))}
					</div>
				</ScrollingRows>
			</ContentWrapper>
		</FocusContext.Provider>
	)
}

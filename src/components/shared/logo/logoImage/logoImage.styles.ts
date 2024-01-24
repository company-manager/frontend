import styled from '@emotion/styled'

type WrapperImageType = {
	aspectRatio: number
	maxHeight: number
	objectFit?: string
}

export const WrapperImage = styled.div<WrapperImageType>`
	position: relative;
	max-height: 60px;
	aspect-ratio: ${({ aspectRatio }) => aspectRatio && aspectRatio};
	max-height: ${({ maxHeight }) => maxHeight && maxHeight}px;

	img {
		object-fit: ${({ objectFit }) => (objectFit ? objectFit : 'contain')};
	}
`

import styled from '@emotion/styled'
import { spacing } from '@/config/theme.config'

type ContainerTypes = {
	hasHorizontalSpacing?: boolean
}

export const Container = styled.div(({ hasHorizontalSpacing = true }: ContainerTypes) => ({
	margin: '0 auto',
	'padding-inline': spacing.lg,
}))

import styled from 'styled-components';
import { colors, THXMX_BORDER_RADIUS_SIZE, THXMX_FONT_SIZES, THXMX_PADDING_SIZES } from '../../constants';
import { IThxmxSize } from '@/interfaces';

type ContainerButtonType = {
    variant: 'primary' | 'secondary' | 'error';
    full?: boolean;
    size?: keyof IThxmxSize;
    disabled?: boolean;
};

export const ContainerButton = styled.button<ContainerButtonType>(
    ({ variant = 'primary', disabled, full = false, size = 'm' }) => ({
        background: disabled ? colors[`${variant}-lighter`] : colors[variant],
        color: 'white',
        width: full ? '100%' : 'auto',
        outline: 'none',
        fontWeight: 'bold',
        fontSize: THXMX_FONT_SIZES[size],
        border: 'none',
        padding: THXMX_PADDING_SIZES[size],
        borderRadius: THXMX_BORDER_RADIUS_SIZE[size],
        cursor: disabled ? 'not-allowed' : 'pointer',
        transition: 'all .3s ease-in-out',
        '&:hover': {
            background: disabled ? colors[`${variant}-lighter`] : colors[`${variant}-darker`],
        },
    })
);

export const ContainerLinkButton = styled.a<ContainerButtonType>(({ variant = 'primary', size = 'm' }) => ({
    color: colors[variant],
    fontWeight: 'bold',
    textDecoration: 'none',
    '&:hover': {
        color: colors[`${variant}-darker`],
    },
}));
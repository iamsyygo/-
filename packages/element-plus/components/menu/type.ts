import type {
    MenuItemProps,
    SubMenuProps,
    MenuItemGroupProps,
} from 'element-plus/es/components';

type SeaMenuItemProps = Partial<MenuItemProps & SubMenuProps & MenuItemGroupProps>;
export interface ISeaMenuItemProps extends SeaMenuItemProps {
    type?: 'item' | 'sub' | 'group';
    title: string;
    key: string;
    index: string;
    children?: ISeaMenuItemProps[];
}

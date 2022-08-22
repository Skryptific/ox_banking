import { ActionIcon, createStyles, Tooltip } from '@mantine/core';
import { IconBaseProps } from 'react-icons';
import { Link, useLocation } from 'react-router-dom';

interface Props {
  tooltip: string;
  to: string;
  Icon: React.ComponentType<IconBaseProps>;
  color?: string;
  hoverColor?: string;
}

const useStyles = createStyles((theme, color) => ({
  icon: {
    width: 50,
    height: 50,
    transition: '300ms',
  },
}));

const NavIcon: React.FC<Props> = ({ tooltip, Icon, color, to }) => {
  const { classes } = useStyles();
  const location = useLocation();

  return (
    <Tooltip label={tooltip} position="right">
      <ActionIcon
        size="xl"
        component={Link}
        to={to}
        color={color || 'blue.4'}
        className={classes.icon}
        variant={location.pathname === to ? 'light' : 'transparent'}
        sx={(theme) => ({
          '&:hover': {
            color: color ? theme.colors.red[3] : theme.colors.blue[3],
            backgroundColor: location.pathname !== to ? theme.colors.dark[6] : undefined,
          },
        })}
      >
        <Icon fontSize={24} />
      </ActionIcon>
    </Tooltip>
  );
};

export default NavIcon;

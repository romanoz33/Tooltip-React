import React from 'react';
import atomize from "@quarkly/atomize";
import TooltipReact from "react-simple-tooltip";

const Tooltip = ({
	children,
	t_text,
	t_background,
	t_color,
	t_border,
	t_family,
	t_size,
	t_padding,
	t_radius,
	t_index,
	t_arrow,
	t_placement,
	t_fadeEasing,
	t_fadeDuration,
	...props
}) => <TooltipReact
	{...props}
	content={t_text}
	fontFamily={t_family}
	fontSize={t_size}
	background={t_background}
	color={t_color}
	border={t_border}
	padding={t_padding}
	radius={t_radius}
	zIndex={t_index}
	arrow={t_arrow}
	placement={t_placement}
	fadeEasing={t_fadeEasing}
	fadeDuration={t_fadeDuration}
>
	    
	{children}
</TooltipReact>;

export default atomize(Tooltip)({
	name: "Tooltip",
	effects: {
		hover: ":hover"
	},
	normalize: true,
	mixins: true,
	description: {
		en: "Tooltip "
	},
	propInfo: {
		t_text: {
			control: "input",
			category: '1.Font',
			description: {
				en: "Tooltip text"
			},
			weight: 1
		},
		t_family: {
			control: "input",
			category: '1.Font',
			description: {
				en: "Tooltip text font-family"
			},
			weight: .5
		},
		t_size: {
			control: "input",
			category: '1.Font',
			description: {
				en: "Tooltip text font-size"
			},
			weight: .5
		},
		t_background: {
			control: "color",
			category: '2.Colors',
			description: {
				en: "Tooltip background color"
			},
			weight: .5
		},
		t_color: {
			control: "color",
			category: '2.Colors',
			description: {
				en: "Tooltip text color"
			},
			weight: .5
		},
		t_border: {
			control: "color",
			category: '2.Colors',
			description: {
				en: "Tooltip border color"
			},
			weight: 1
		},
		t_padding: {
			control: "input",
			description: {
				en: "Tooltip padding, in pixels"
			},
			weight: .5
		},
		t_radius: {
			control: "input",
			description: {
				en: "Tooltip border radius	"
			},
			weight: .5
		},
		t_index: {
			control: "input",
			description: {
				en: "Tooltip z-index"
			},
			weight: 1
		},
		t_arrow: {
			control: "input",
			category: '3.Arrow',
			description: {
				en: "Arrow size, in pixels"
			},
			weight: .5
		},
		t_placement: {
			control: "select",
			variants: ['top', 'right', 'bottom', 'left'],
			category: '3.Arrow',
			description: {
				en: "left, top, right or bottom"
			},
			weight: .5
		},
		t_fadeEasing: {
			control: "input",
			category: '3.Arrow',
			description: {
				en: "Fade easing"
			},
			weight: .5
		},
		t_fadeDuration: {
			control: "input",
			category: '3.Arrow',
			description: {
				en: "Fade duration, in milliseconds"
			},
			weight: .5
		}
	}
}, {
	t_text: 'Tooltip text',
	t_family: 'inherit',
	t_size: '14px',
	t_background: '#000',
	t_color: '#fff',
	t_border: '#000',
	t_padding: '16',
	t_radius: '0',
	t_index: '1',
	t_arrow: '8',
	t_placement: 'top',
	t_fadeEasing: 'linear',
	t_fadeDuration: '0'
});
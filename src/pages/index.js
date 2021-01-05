import React from "react";
import theme from "theme";
import { Theme, Link, Box, Strong, Text, Button, Icon } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import * as Components from "components";
import { MdAnnouncement } from "react-icons/md";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Box height="100px" />
		<Text font="20px sans-serif" text-align="center">
			<Strong
				data-q-widget-type="PRIMITIVE"
				overflow-wrap="normal"
				word-break="normal"
				white-space="normal"
				text-indent="0"
				text-overflow="clip"
				hyphens="manual"
			>
				Tooltip реализована как оболочка.{" "}
				<br />
				Внутри вставляем другие компоненты (text, button, icon, image и т.д.)
			</Strong>
		</Text>
		<Box height="50px" />
		<Box display="flex" justify-content="space-around" align-items="center">
			<Components.Tooltip t_text="Текст">
				<Text quarkly-title="Наведи на текст">
					Наведи на текст
				</Text>
			</Components.Tooltip>
			<Components.Tooltip t_text="Кнопка">
				<Button>
					Наведи на кнопку
				</Button>
			</Components.Tooltip>
			<Components.Tooltip t_text="Иконка">
				<Icon category="md" icon={MdAnnouncement} size="43px" color="#999999" />
			</Components.Tooltip>
			<Components.Tooltip t_text="Ссылка">
				<Link href="#">
					Наведи на ссылку
				</Link>
			</Components.Tooltip>
		</Box>
		<Box height="100px">
			<Text font="20px sans-serif" text-align="center" margin="100px 0px 16px 0px">
				<Strong
					data-q-widget-type="PRIMITIVE"
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
				>
					Меняем оформление{" "}
					<br />
					(шрифт, размер, цвет текста/фона/рамки, скругления, отступы)
				</Strong>
			</Text>
			<Box height="50px" />
			<Box display="flex" justify-content="space-around" align-items="center">
				<Components.Tooltip
					t_text="Текст"
					t_family="fantasy"
					t_background="#ffffff"
					t_color="#ff0000"
					t_border="#a20202"
					t_padding="10"
				>
					<Text quarkly-title="Наведи на текст">
						Наведи на текст
					</Text>
				</Components.Tooltip>
				<Components.Tooltip t_text="Текст" t_background="#005eff" t_border="#005eff">
					<Text quarkly-title="Наведи на текст">
						Наведи на текст
					</Text>
				</Components.Tooltip>
				<Components.Tooltip t_text="Текст" t_padding="30">
					<Text quarkly-title="Наведи на текст">
						Наведи на текст
					</Text>
				</Components.Tooltip>
				<Components.Tooltip t_text="Текст" t_background="#ffffff" t_color="#000000" t_radius="5">
					<Text quarkly-title="Наведи на текст">
						Наведи на текст
					</Text>
				</Components.Tooltip>
			</Box>
			<Text font="20px sans-serif" text-align="center" margin="100px 0px 16px 0px">
				<Strong
					data-q-widget-type="PRIMITIVE"
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
				>
					(
					<Strong
						data-q-widget-type="PRIMITIVE"
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
					>
						напрвление/размер стрелки
					</Strong>
				</Strong>
				<Strong
					data-q-widget-type="PRIMITIVE"
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
				>
					)
				</Strong>
			</Text>
			<Box height="50px" />
			<Box display="flex" justify-content="space-around" align-items="center">
				<Components.Tooltip
					t_text="Текст"
					t_background="#ffffff"
					t_color="#000000"
					t_border="#000000"
					t_radius="5"
				>
					<Text quarkly-title="Наведи на текст">
						Стрелка сверху
					</Text>
				</Components.Tooltip>
				<Components.Tooltip
					t_text="Текст"
					t_placement="left"
					t_background="#ffffff"
					t_color="#000000"
					t_radius="5"
					t_arrow="12"
				>
					<Text quarkly-title="Наведи на текст">
						Стрелка слева
					</Text>
				</Components.Tooltip>
				<Components.Tooltip
					t_text="Текст"
					t_placement="bottom"
					t_color="#000000"
					t_background="#ffffff"
					t_radius="5"
					t_arrow="18"
				>
					<Text quarkly-title="Наведи на текст">
						Стрелка снизу
					</Text>
				</Components.Tooltip>
				<Components.Tooltip
					t_text="Текст"
					t_placement="right"
					t_color="#000000"
					t_background="#ffffff"
					t_radius="5"
					t_arrow="25"
				>
					<Text quarkly-title="Наведи на текст">
						Стрелка справа
					</Text>
				</Components.Tooltip>
			</Box>
			<Box height="100px">
				<Text font="20px sans-serif" text-align="center" margin="100px 0px 16px 0px">
					<Strong
						data-q-widget-type="PRIMITIVE"
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
					>
						(
						<Strong
							data-q-widget-type="PRIMITIVE"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							скорость анимации
						</Strong>
						{"\n\n"})
					</Strong>
				</Text>
				<Box height="50px" />
				<Box display="flex" justify-content="space-around" align-items="center">
					<Components.Tooltip
						t_text="Текст"
						t_background="#0057ff"
						t_color="#ffffff"
						t_border="#0057ff"
						t_radius="5"
					>
						<Text quarkly-title="Наведи на текст">
							Duration 0
						</Text>
					</Components.Tooltip>
					<Components.Tooltip
						t_text="Текст"
						t_background="#0057ff"
						t_color="#ffffff"
						t_border="#0057ff"
						t_radius="5"
						t_fadeDuration="200"
					>
						<Text quarkly-title="Наведи на текст">
							Duration 200ms
						</Text>
					</Components.Tooltip>
					<Components.Tooltip
						t_text="Текст"
						t_background="#0057ff"
						t_color="#ffffff"
						t_border="#0057ff"
						t_radius="5"
						t_fadeDuration="500"
					>
						<Text quarkly-title="Наведи на текст">
							Duration .5s
						</Text>
					</Components.Tooltip>
					<Components.Tooltip
						t_text="Текст"
						t_background="#0057ff"
						t_color="#ffffff"
						t_border="#0057ff"
						t_radius="5"
						t_fadeDuration="2000"
					>
						<Text quarkly-title="Наведи на текст">
							Duration 2s
						</Text>
					</Components.Tooltip>
				</Box>
				<Box height="100px" />
			</Box>
		</Box>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
	</Theme>;
});
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import type { ButtonType } from "../types";

export const CopyButton: ButtonType = ({ quote, color }) => {
	const copyText = async () => {
		try {
			await navigator.clipboard.writeText(quote);
			alert("Copied to Clipboard!!");
		} catch (err) {
			alert(`Failed to Copy${err}`);
		}
	};
	return (
		<Button
			onClick={copyText}
			variant={color}
			className="d-flex justify-content-center align-items-center gap-2"
		>
			<img src="/icons/clipboard.svg" height={24} width={24} alt="clipboard" />
			<span className="atkinson-regular">Copy to Clipboard</span>
		</Button>
	);
};

export const WhatsApp: ButtonType = ({ quote, color }) => {
	const shareOnWhatsApp = () => {
		const encodedText = encodeURIComponent(quote);
		const whatsappUrl = `whatsapp://send?text=${encodedText}`;
		window.location.href = whatsappUrl;
	};
	return (
		<Button
			onClick={shareOnWhatsApp}
			variant={color}
			className="d-flex justify-content-center align-items-center gap-2"
		>
			<img src="/icons/whatsapp.svg" height={24} width={24} alt="whatsapp" />
			<span className="atkinson-regular">Share on Whatsapp</span>
		</Button>
	);
};

export const Tumblr: ButtonType = ({ quote, color }) => {
	const shareOnTumblr = () => {
		const encodedText = encodeURIComponent(quote);
		const tumblrUrl = `https://www.tumblr.com/widgets/share/tool?posttype=text&content=${encodedText}`;
		window.open(tumblrUrl, "_blank");
	};
	return (
		<Button
			onClick={shareOnTumblr}
			variant={color}
			className="d-flex justify-content-center align-items-center gap-2"
		>
			<img src="/icons/tumblr.svg" height={24} width={24} alt="tumblr" />
			<span className="atkinson-regular">Share on Tumblr</span>
		</Button>
	);
};

export const LoadingButton = ({ color }: { color: string }) => (
	<Button variant={color} disabled>
		<Spinner
			as="span"
			color={color}
			animation="border"
			size="sm"
			role="status"
			aria-hidden="true"
		/>
		&nbsp;Loading...
	</Button>
);

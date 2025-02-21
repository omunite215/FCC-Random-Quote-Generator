import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import type { Color } from "react-bootstrap/esm/types";
import Navbar from "react-bootstrap/Navbar";

export const Header = ({ color }: { color: Partial<Color> }) => {
	return (
		<Navbar className="bg-body-secondary w-100">
			<Container>
				<Navbar.Brand
					href="/"
					className="d-flex align-items-center gap-2"
				>
					<Button variant={color as string}>
						<img
							alt="logo-img"
							src="/logo/logo.png"
							width="30"
							height="30"
							 className="object-fit-contain d-inline-block align-text-top rotate-bottom"
						/>
					</Button>
					<h3 className={`atkinson-bold my-auto fs-5 text-${color} `}>
						The<em>&nbsp;"Quote"&nbsp;</em>Machine
					</h3>
				</Navbar.Brand>
			</Container>
		</Navbar>
	);
};

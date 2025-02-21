import Card from "react-bootstrap/Card";
import { LoadingButton } from "./Buttons";
import Spinner from "react-bootstrap/Spinner";
import { Header } from "./Header";
import Container from "react-bootstrap/Container";

const Loading = ({ color }: { color: string }) => {
	return (
		<main className={`d-flex flex-column min-vh-100 bg-${color}`}>
			<Header color={color} />
			<div className="flex-grow-1 d-flex justify-content-center align-items-center my-2">
			<Container>
				<Card className="text-center d-grid align-items-center">
					<Card.Header className={`atkinson-bold text-${color}`}>
						The "Quote" Machine
					</Card.Header>
					<Card.Body>
						<Card.Title>
							<Spinner as="span" color={color} />
						</Card.Title>
						<Card.Text>
							- <Spinner as="span" color={color} size="sm" />
						</Card.Text>
						<LoadingButton color={color} />
					</Card.Body>
					<Card.Footer className="d-flex flex-wrap align-items-center justify-content-center gap-3">
						<LoadingButton color={color} />
						<LoadingButton color={color} />
						<LoadingButton color={color} />
					</Card.Footer>
					<h5 className="mt-2 atkinson-semibold">by Om Patel</h5>
				</Card>
			</Container>
			</div>
		</main>
	);
};

export default Loading;

import { useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Toast from "react-bootstrap/Toast";

const ErrorToast = ({ error }: { error: Error }) => {
  
	const [showA, setShowA] = useState(!!error);

	const toggleShowA = () => setShowA(!showA);

	return (
		<Row className="text-center text-danger position-absolute top-50 start-50 translate-middle">
			<Col className="mb-2">
				<Toast show={showA} onClose={toggleShowA}>
					<Toast.Header>
						<img src="/icons/error.svg" alt="error" height={24} width={24} />
						<strong className="me-auto">{error.name}</strong>
						<small>Please try again later.</small>
					</Toast.Header>
					<Toast.Body>{error.message}</Toast.Body>
				</Toast>
			</Col>
		</Row>
	);
};

export default ErrorToast;

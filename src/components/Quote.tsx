import Card from "react-bootstrap/Card";
import type { QuoteType } from "../types";
import { CopyButton, Tumblr, WhatsApp } from "./Buttons";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { useEffect, useState } from "react";

const Quote: QuoteType = ({ color, changeQuote, quote }) => {
	const [displayedQuote, setDisplayedQuote] = useState("");
	const [displayedAuthor, setDisplayedAuthor] = useState("");
	useEffect(() => {
		let quoteIndex = 0;
		let authorIndex = 0;
		const quoteInterval = setInterval(() => {
			if (quoteIndex < quote.quote.length) {
				setDisplayedQuote(quote.quote.substring(0, quoteIndex + 1));
				quoteIndex++;
			} else {
				clearInterval(quoteInterval);
				const authorInterval = setInterval(() => {
					if (authorIndex < quote.author.length) {
						setDisplayedAuthor(quote.author.substring(0, authorIndex + 1));
						authorIndex++;
					} else {
						clearInterval(authorInterval);
					}
				}, 30);
			}
		}, 30); 

		return () => {
			clearInterval(quoteInterval);
		};
	}, [quote]);
	const shareText = `${quote.quote} - ${quote.author}`;
	return (
		<Container>
			<Card className="text-center d-grid align-items-center">
				<Card.Header className={`atkinson-bold text-${color}`}>
					The "Quote" Machine
				</Card.Header>
				<Card.Body>
					<Card.Title className="atkinson-bold fs-2">
						"{displayedQuote}"
					</Card.Title>
					<Card.Text className="atkinson-regular fs-4">
						- {displayedAuthor}
					</Card.Text>
					<Button
						onClick={changeQuote}
						variant={color}
						className="atkinson-regular"
					>
						Change Quote
					</Button>
				</Card.Body>
				<Card.Footer className="d-flex flex-wrap align-items-center justify-content-center gap-3">
					<CopyButton quote={shareText} color={color} />
					<WhatsApp quote={shareText} color={color} />
					<Tumblr quote={shareText} color={color} />
				</Card.Footer>
				<h5 className="mt-2 atkinson-semibold">by Om Patel</h5>
			</Card>
		</Container>
	);
};

export default Quote;

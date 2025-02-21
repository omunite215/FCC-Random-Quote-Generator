import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/index.css";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import getQuote from "./services/quote.service";
import type { Quote as Response } from "./types";
import { toggleColor } from "./utils/toggleColor";
import { ErrorToast, Header, Loading, Quote } from "./components";

export function Main() {
	const { isPending, error, data, refetch } = useQuery<Response>({
		queryKey: ["query"],
		queryFn: getQuote,
		staleTime: Number.POSITIVE_INFINITY,
		retry: false, //If you dont want to retry on error
	});

	const [color, setColor] = useState("primary");

	const handleChangeQuote = () => {
		setColor(toggleColor);
		refetch();
	};

	if (isPending || !data) return <Loading color={color} />;

	if (error) return <ErrorToast error={error} />;

	return (
		<main className={`d-flex flex-column min-vh-100 bg-${color}`}>
			<Header color={color} />
			<div className="flex-grow-1 d-flex justify-content-center align-items-center my-2">
				<Quote color={color} changeQuote={handleChangeQuote} quote={data} />
			</div>
		</main>
	);
}

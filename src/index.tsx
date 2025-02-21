import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Main } from "./main";

const container = document.querySelector("#root") as Element;
const root = createRoot(container);
const queryClient = new QueryClient();

root.render(
	<QueryClientProvider client={queryClient}>
		<Main />
	</QueryClientProvider>,
);

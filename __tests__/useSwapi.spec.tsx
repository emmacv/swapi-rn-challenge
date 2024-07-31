import { it, jest, expect, describe } from "@jest/globals";
import { renderHook, waitFor } from "@testing-library/react-native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import useSwapi from "../src/hooks/useSwapi";
import axios from "axios";

jest.mock("axios");

const queryClient = new QueryClient();
const mokedAxios = axios as jest.Mocked<typeof axios>;

const wrapper = ({ children }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

describe("useSwapi", () => {
  it("should fetch people data correctly", async () => {
    const mockData = {
      data: {
        previous: null,
        count: 2,
        results: [{ name: "Luke Skywalker" }, { name: "Darth Vader" }],
        next: "https://swapi.dev/api/people/?page=2",
      },
    };

    mokedAxios.get.mockResolvedValue(mockData);

    const { result } = renderHook(useSwapi, {
      wrapper,
      initialProps: "people",
    });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));
  });

  it("should fetch planets data correctly", async () => {
    const mockData = {
      data: {
        previous: null,
        count: 2,
        results: [{ name: "Tatooine" }, { name: "Alderaan" }],
        next: "https://swapi.dev/api/planets/?page=2",
      },
    };

    mokedAxios.get.mockResolvedValue(mockData);

    const { result } = renderHook(useSwapi, {
      wrapper,
      initialProps: "people",
    });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));
  });

  it("should fetch starships data correctly", async () => {
    const mockData = {
      data: {
        previous: null,
        count: 2,
        results: [{ name: "CR90 corvette" }, { name: "Star destroyer" }],
        next: "https://swapi.dev/api/starships/?page=2",
      },
    };

    mokedAxios.get.mockResolvedValue(mockData);

    const { result } = renderHook(useSwapi, {
      wrapper,
      initialProps: "people",
    });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));
  });
});

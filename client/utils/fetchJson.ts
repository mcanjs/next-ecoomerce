export default async function fetchJson(
  input: RequestInfo,
  init?: RequestInit
): Promise<any> {
  const response = await fetch(input, init);
  const data = await response.json();

  if (response.ok && response.headers.get('set-cookie')) {
    const token: string = response.headers.get('set-cookie') || '';
    return { token, ...data };
  }

  if (response.ok) {
    return data;
  }

  throw new FetchError({
    message: response.statusText,
    response,
    data
  });
}

export class FetchError extends Error {
  response: Response;
  data: {
    message: string;
  };
  constructor({
    message,
    response,
    data
  }: {
    message: string;
    response: Response;
    data: {
      message: string;
    };
  }) {
    // Pass remaining arguments (including vendor specific ones) to parent constructor
    super(message);

    // Maintains proper stack trace for where our error was thrown (only available on V8)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, FetchError);
    }

    this.name = 'FetchError';
    this.response = response;
    this.data = data ?? { message: message };
  }
}

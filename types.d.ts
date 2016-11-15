
interface Context {
  res: {
    status?: number;
    body?: any;
  };
  done: () => void;
}
interface HeaderProps extends React.ComponentProps<"header"> {
  heading: string;
}

export function Header({ heading, ...props }: HeaderProps) {
  return (
    <header className="content-header" {...props}>
      <h1 className="heading">{heading}</h1>
    </header>
  );
}

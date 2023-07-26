import { render, screen } from "@testing-library/react";
import SocialMediaCard, { SocialMediaCardProps } from "./SocialMediaCard";

const defaultProps: SocialMediaCardProps = {
  facebook_url: "https://www.facebook.com/mypage",
  reddit_url: "https://www.reddit.com/r/mysubreddit",
  twitter_handle: "mytwitterhandle",
};

describe("SocialMediaCard", () => {
  const renderSocialMediaCard = (props: SocialMediaCardProps = defaultProps) =>
    render(<SocialMediaCard {...props} />);

  it("renders social media links", () => {
    renderSocialMediaCard();

    const facebookLink = screen.getByText("Facebook") as HTMLAnchorElement;
    expect(facebookLink).toBeVisible();
    expect(facebookLink.href).toBe(defaultProps.facebook_url);

    const redditLink = screen.getByText("Reddit") as HTMLAnchorElement;
    expect(redditLink).toBeVisible();
    expect(redditLink.href).toBe(defaultProps.reddit_url);

    const twitterLink = screen.getByText("Twitter") as HTMLAnchorElement;
    expect(twitterLink).toBeVisible();
    expect(twitterLink.href).toBe(
      `https://twitter.com/${defaultProps.twitter_handle}`,
    );

    // Assert that the images are rendered
    const facebookImage = screen.getByAltText("Facebook logo");
    const redditImage = screen.getByAltText("Reddit logo");
    const twitterImage = screen.getByAltText("Twitter logo");

    expect(facebookImage).toBeVisible();
    expect(redditImage).toBeVisible();
    expect(twitterImage).toBeVisible();
  });

  it("does not render social media links if not provided", () => {
    render(<SocialMediaCard {...{}} />);

    const facebookLink = screen.queryByText("Facebook");
    const redditLink = screen.queryByText("Reddit");
    const twitterLink = screen.queryByText("Twitter");

    expect(facebookLink).toBeNull();
    expect(redditLink).toBeNull();
    expect(twitterLink).toBeNull();
  });
});

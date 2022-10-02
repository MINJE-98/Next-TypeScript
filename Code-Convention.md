# Code Convention

> 기본적인 코드 컨벤션입니다.

# Github

## 형상 관리

git flow, git-hub flow, git-lab flow중 프로젝트에 맞는 형상 관리를 채택합니다.

## Commit message

[Conventional Commits](https://www.conventionalcommits.org/ko/v1.0.0-beta.4/)을 준수합니다

## PR

쉽게 읽을 수 있어야 합니다
하나의 PR은 하나의 단위 기능만 개발해야 합니다

## eslint

[eslint-config-airbnb](https://github.com/apple77y/javascript/tree/master/react)를 사용합니다.

- eslint-config-airbnb-typescript를 확장합니다.

- [ReactV17의 JSX의 Transform 방식](https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html)으로 인해 plugin:react/jsx-runtime를 확장합니다.

- prettier를 확장합니다.

- 프로젝트에 따라 룰이 추가되면 PR로 알려야합니다.

# 패키지 관리

> 이 섹션은 패키지 관리 규칙에 대해 다룹니다.

## 패키지 매니저

패키지 매니저는 `yarn 1.0` 을 사용합니다.

## 패키지 의존성

[devDependencies](https://docs.npmjs.com/cli/v8/configuring-npm/package-json#devdependencies)와 [dependencies](https://docs.npmjs.com/cli/v8/configuring-npm/package-json#dependencies)를 구분하여 패키지를 관리합니다.

### peerDependencies warn이 발생한 경우

1. PeerDependencies 패키지가 이미 설치 되어 있는지 확인합니다.
2. 메이저 업데이트를 제외한 업데이트가 필요할 시 업데이트합니다.
3. 작업을 PR에 명시합니다.

## 패키지 파일 접근

Package.json, yarn.lock 파일은 직접 수정하지 않고 패키지 관리자 명령어를 통해 수정합니다.

→ [npm command](https://docs.npmjs.com/cli/v8/commands), [yarn command](https://classic.yarnpkg.com/en/docs/cli/)

# Typescript

strict 모드를 활성화합니다.

props가 2개이상인 경우 interface를 해당 파일 위에 생성합니다.

각 객체간의 메세지를 주고받을 때 반드시 typeSafe 하게 타입을 정의합니다.

# 파일 네이밍 컨벤션

tsx,jsx 파일은 파스칼 케이스

그밖의 다른 파일들은 카멜 케이스

폴더 이름은 케밥-케이스

입니다.

# Import 정렬

next, react → 외부 정의 라이브러리 → 내부 정의 라이브러리 → 컴포넌트 → 타입

순으로 Import를 정렬합니다.

# 컴포넌트 구조

## @Common

@Common은 Atomic Design을 이용하여 구성하며, 내부 컴포넌트에서는 SideEffect가 발생하지않는 순수 함수로 작성되어야합니다.

> ❗단 컴포넌트 내부 리스너 같은 SideEffect가 존재할 수 있지만, 서버 관련 hooks는 절대 존재해서는 안됩니다..

### Atom

Atom은 컴포넌트의 가장 작은 단위입니다.

현재 프로젝트에서 CSS in JS를 적용하지 않고 Tailwind를 100% 사용하여 구현하고 있기 때문에 대부분의 button, input의 디자인이 여기서 결정됩니다.

> Atom 컴포넌트는 내부에 어떠한 SideEffect가 존재해서는 안됩니다.

> Atom 컴포넌트는 button, input과 같은 기본적인 HTML 테그로 분류합니다.

> Atom 컴포넌트의 네이밍은 자신의 관심, HTMLTag를 조합하여 컴포넌트 이름을 지정합니다.

> 비슷한 관심사끼리 묶어 하나의 폴더에 구현합니다.

```
+ atom
	+ buttons
		| PrimaryButton.tsx
		| SecondaryButton.tsx
	+ input
		| FileInput.tsx
		| TextInput.tsx
	+ image
		+ avatars
			| EmptyAvatarsImage.tsx
			| AvatarsImage.tsx
		+ thumbnail
			| EmptyThumbnailImage.tsx
			| ThumbnailImage.tsx
```

### Molecules

Atom을 구성하여 Molecules를 구성하거나, HTML테그 자체를 사용하여 구성합니다.

> Molecules에서부터 어떤 도메인의 컴포넌트에서 사용될 것인지 결정된다.

> Molecules 컴포넌트는 내부에 어떠한 SideEffect가 존재해서는 안됩니다.

> Molecules 컴포넌트의 네이밍은 자신의 도메인과 관심사를 포함하여 컴포넌트 이름을 지정합니다.

> 비슷한 도메인끼리 묶어 하나의 폴더로 구현야합니다.

> 컴포넌트 이름을 보고 어떤 역할을 하는 컴포넌트인지 알 수 있어야합니다.

```
+ molecules
	+ profile
		| UserProfile.tsx
	+ image
		| PostThumbnail.tsx
```

### organisms

Atom, Molescules을 사용하여 Organisms를 구성합니다.

> Organisms 컴포넌트는 내부에 어떠한 SideEffect가 존재해서는 안됩니다.

> Organisms 컴포넌트의 네이밍은 자신의 도메인과 관심사를 포함하여 컴포넌트 이름을 지정합니다.

```
+ Organisms
	+ list
		| PostCardList.tsx
```

## @HOCS

`High Order Component`를 관리합니다.

## @Layout

동일한 레이아웃을 자주 사용하거나, 어디든 똑같은 레이아웃을 적용한다면 이곳에 생성하여 적용하는 것이 원칙입니다.

## @Models

Models 컴포넌트는 서버측 State를 CURD가능한 컴포넌트입니다.

프론트엔드에서 더러운 작업은 `@Models`에서 담당합니다.

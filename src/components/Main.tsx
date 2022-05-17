import { SimpleGrid, Space } from "@mantine/core"
import { useLocalStorageValue } from "@mantine/hooks"
import { AnnictLogin } from "./AnnictLogin"
import { CheckDiff } from "./CheckDiff"
import { FirstView } from "./FirstView"
import { MALLogin } from "./MALLogin"

export const Main = () => {
  const [annictToken, setAnnictToken] = useLocalStorageValue<string>({
    key: "ANNICT_ACCESS_TOKEN",
    defaultValue: "",
  })
  const [malAccessToken, setMalAccessToken] = useLocalStorageValue<string>({
    key: "MAL_ACCESS_TOKEN",
    defaultValue: "",
  })
  return (
    <>
      <FirstView />
      <Space h="md" />
      <SimpleGrid spacing="md" cols={2}>
        <AnnictLogin
          annictToken={annictToken}
          setAnnictToken={setAnnictToken}
        />
        <MALLogin
          malAccessToken={malAccessToken}
          setMalAccessToken={setMalAccessToken}
        ></MALLogin>
      </SimpleGrid>
      <Space h="lg" />
      {annictToken && (
        <CheckDiff
          annictAccessToken={annictToken}
          malAccessToken={malAccessToken}
        />
      )}
    </>
  )
}

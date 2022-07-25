ESX = nil

TriggerEvent('esx:getSharedObject', function(obj) ESX = obj end)

ESX.RegisterServerCallback('lsc_tablet:checkfp', function(source, cb)
    local steamid  = false

  for k,v in pairs(GetPlayerIdentifiers(source))do
        
      if string.sub(v, 1, string.len("steam:")) == "steam:" then
        steamid = tostring(v)
      end
    
  end

    local _source = source
    local xPlayer = ESX.GetPlayerFromId(_source)

    MySQL.Async.fetchAll("SELECT * FROM users WHERE identifier=@steamid", {['@steamid'] = steamid}, function(grades)
        for k, result in pairs(grades) do
                cb(result)
        end
    end)

end)

RegisterServerEvent('lsc_tablet:wyslijfaktura')
AddEventHandler('lsc_tablet:wyslijfaktura', function(data,target)
  TriggerClientEvent('wyswietlfaktura', target, data)
end)
RegisterServerEvent('lsc_tablet:zaplacfakture')
AddEventHandler('lsc_tablet:zaplacfakture', function(data)
  local _source = source
  local target = ESX.GetPlayerFromId(_source)
  print(data.pracownik .." ".. data.powod)
  target.removeAccountMoney('bank', tonumber(data.kwota))
  local daneobywatela= target.getName()
  TriggerClientEvent('obywatelzaplacił',-1, data,daneobywatela)
end)